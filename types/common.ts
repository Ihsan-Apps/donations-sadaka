export interface Pagination {
	page?: number;
	pageSize?: number;
	sort?: 'desc' | 'asc';
}
export interface Media {
	id: number;
	url: string;
	name: string;
	alternativeText?: string;
	caption?: string;
	width?: number;
	height?: number;
	formats?: any;
	mime?: string;
	size?: number;
	previewUrl?: string | null;
	provider: string;
	provider_metadata?: any;
}
export interface ApiResponse<T> {
	success: boolean;
	data: T;
	error: string | null;
}
export interface MetaPagination {
	pagination: {
		page: number;
		pageSize: number;
		pageCount: number;
		total: number;
	};
}
export interface ApiListResponse<T> {
	data: T[];
	meta: MetaPagination;
}
