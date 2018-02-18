export interface Folder{
    id: number;
    name :string;
    hasChildren: boolean;
    files: File[];
}

export interface File{
    name: string;
    type: string;
    size: number;
    isDeleted: boolean;
}
