'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createBlog } from '@/actions/blog';
import TiptapEditor from '@/components/tip-tap-editor';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';

const formSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function CreateBlogPage() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '', content: '' },
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content);

      const result = await createBlog(formData);

      if (result.success && result.blog?.slug) {
        toast.success('Blog published successfully!');
        redirect(`/blog/${result.blog.slug}`);
      } else {
        toast.error(result.error || 'Failed to publish blog');
      }
    });
  });


  const handleEditorSubmit = () => {
    onSubmit(); 
  };

  return (
    <form onSubmit={onSubmit}>
      <TiptapEditor
        title={watch('title')}
        onTitleChange={(title) => setValue('title', title, { shouldValidate: true })}
        content={watch('content')}
        onContentChange={(html) => setValue('content', html, { shouldValidate: true })}
        onSubmit={handleEditorSubmit}   // Now type-safe
        isPending={isPending}
        errors={errors}
      />
    </form>
  );
}