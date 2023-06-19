export type pokemon = {
  name: string;
  id: number;
};

export type Post = {
  name: string;
  body: string;
  id: number;
  author_name: string;
  image_url: string;
  created_at?: string;
  updated_at?: string;
};
