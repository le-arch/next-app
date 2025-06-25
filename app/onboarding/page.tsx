'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  artistCategories,
} from '../../lib/data';

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../components/ui/dropdown-menu";
import TransitionWrapper from '../components/TransitionWrapper';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  bio: z.string().optional(),
  categories: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
  feeRange: z.string().optional(),
  profileImage: z.string().optional(),
  location: z.string().optional(),
});

// Use a type alias instead of an empty interface
type ArtistFormValues = z.infer<typeof formSchema>;


/**
 * ArtistOnboardingForm component
 * Form for artists to onboard
 * @returns {JSX.Element} - The ArtistOnboardingForm component
 */
const ArtistOnboardingForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ArtistFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      bio: '',
      categories: [],
      languages: [],
      feeRange: '',
      profileImage: '',
      location: '',
    },
  });

  /**
   * onSubmit function
   * Handles form submission
   * @param {ArtistFormValues} data - The form data
   */
  const onSubmit = (data: ArtistFormValues) => {
    console.log('Form Data:', data); // Or send to a mock API endpoint
  };

  return (
    <TransitionWrapper>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Artist Onboarding</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input {...field} type="text" id="name" />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="bio">Bio</Label>
            <Controller
              name="bio"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="bio"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            />
          </div>

          <div className="mb-4">
            <Label>Categories</Label>
            <Controller
              name="categories"
              control={control}
              render={({ field }) => (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-2">Categories</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Category</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {artistCategories.map((category) => (
                      <DropdownMenuCheckboxItem
                        key={category.value}
                        checked={field.value?.includes(category.value)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...(field.value || []), category.value]);
                          } else {
                            field.onChange(field.value?.filter((v) => v !== category.value));
                          }
                        }}
                      >
                        {category.label}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            />
          </div>

          {/* Add more form fields: Languages, Fee Range, Profile Image, Location */}

          <div className="mb-4">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </TransitionWrapper>
  );
};

export default ArtistOnboardingForm;
