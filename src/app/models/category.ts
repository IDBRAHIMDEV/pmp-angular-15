export interface Category {
    _id?: string;
    label: string;
    icon: string;
    color: string;

}

export interface CategoryResponse {
    categories: Category[],
    success: boolean
}
