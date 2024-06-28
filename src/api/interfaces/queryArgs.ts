export interface SanityQueryArgs {
	slug: string;
	limit: number;
}

export interface StoriesByAuthorSlugArgs extends SanityQueryArgs {
	offset: number;
}

export interface StoryListBySlugArgs extends SanityQueryArgs {
	amount: string;
	ordering: string;
}
