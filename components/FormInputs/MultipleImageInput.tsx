import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import React from "react";

type ImageInputProps = {
  title: string;
  imageUrls: string[];
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
  endpoint: "categoryImage" | "fileUploads" | "mailAttachments"; // Replace with your valid endpoints
};

export default function MultipleImageInput({
  title,
  imageUrls,
  setImageUrls,
  endpoint,
}: ImageInputProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {/* Main Image */}
          {imageUrls.length > 0 && (
            <Image
              alt={title}
              className="h-40 w-full rounded-md object-cover"
              height={160}
              src={imageUrls[0]} // Display the first image as the main image
              width={300}
            />
          )}
          {/* Image Thumbnails */}
          <div className="grid grid-cols-3 gap-2">
            {imageUrls.map((imageUrl: string, index: number) => (
              <div key={index} className="relative group">
                <Image
                  alt={`Thumbnail ${index + 1}`}
                  className="aspect-square w-full rounded-md object-cover"
                  height={84}
                  src={imageUrl}
                  width={84}
                />
                {/* Remove Image Button */}
                <button
                  onClick={() => {
                    const updatedImages = imageUrls.filter((_, i) => i !== index);
                    setImageUrls(updatedImages);
                  }}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          {/* Upload Button */}
          <UploadButton
            className="col-span-full"
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
              const uploadedUrls = res.map((item) => item.url);
              setImageUrls((prevUrls) => [...prevUrls, ...uploadedUrls]);
            }}
            onUploadError={(error: Error) => {
              alert(`Upload Error: ${error.message}`);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
