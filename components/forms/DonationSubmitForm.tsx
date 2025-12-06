'use client';

import { useState } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast'; // optional për alert
import { getApiUrl } from '@/lib/api';

const apiUrl = getApiUrl(); // URL Strapi

interface DonationFormData {
	title: string;
	desc: string;
	content?: string;
	organization_url: string;
	tags?: string;
	submitter_email?: string;
	submitter_message?: string;
	priority?: number;
	publishedDate?: string;
}

export default function DonationSubmitForm() {
	const [form, setForm] = useState<DonationFormData>({
		title: '',
		desc: '',
		organization_url: '',
		tags: 'help_palestine,donate_to_palestine,',
		publishedDate: new Date().toISOString(),
	});

	const mutation = useMutation({
		mutationFn: (data: DonationFormData) => axios.post(`${apiUrl}/api/donations`, { data }),
		onSuccess: () => {
			toast.success('Donation submitted successfully!');
			setForm({
				title: '',
				desc: '',
				organization_url: '',
				tags: 'help_palestine,donate_to_palestine,',
			});
		},
		onError: (err: any) => {
			toast.error('Error submitting donation. Check console.');
			console.error(err);
		},
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		mutation.mutate(form);
	};

	return (
		<div className='max-w-xl mx-auto p-6  rounded-lg shadow-md'>
			<h2 className='text-2xl font-bold mb-4'>Submit a Donation</h2>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label className='label'>
						<span className='label-text'>Title *</span>
					</label>
					<input type='text' name='title' value={form.title} onChange={handleChange} className='input input-bordered w-full' required />
				</div>

				<div>
					<label className='label'>
						<span className='label-text'>Short Description *</span>
					</label>
					<textarea name='desc' value={form.desc} onChange={handleChange} className='textarea textarea-bordered w-full' required />
				</div>

				<div>
					<label className='label'>
						<span className='label-text'>Organization URL *</span>
					</label>
					<input type='url' name='organization_url' value={form.organization_url} onChange={handleChange} className='input input-bordered w-full' required />
				</div>

				<div>
					<label className='label'>
						<span className='label-text'>Submitter Email</span>
					</label>
					<input type='email' name='submitter_email' value={form.submitter_email || ''} onChange={handleChange} className='input input-bordered w-full' />
				</div>

				<div>
					<label className='label'>
						<span className='label-text'>Message</span>
					</label>
					<textarea name='submitter_message' value={form.submitter_message || ''} onChange={handleChange} className='textarea textarea-bordered w-full' />
				</div>

				<button type='submit' className={`btn btn-primary w-full ${mutation.isPending ? 'loading' : ''}`} disabled={mutation.isPending}>
					Submit
				</button>
			</form>
		</div>
	);
}
