import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import React from "react";

type UploadthingEndpoints = "categoryImage" | "fileUploads" | "mailAttachments";

type UploadResponse = {
  url: string;
};

type ImageInputProps = {
  title: string;
  imageUrl: string;
  setImageUrl: (url: string) => void;
  endpoint: UploadthingEndpoints;
};

export default function ImageInput({
  title,
  imageUrl,
  setImageUrl,
  endpoint,
}: ImageInputProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt={title}
            className="h-40 w-full rounded-md object-cover"
            height={300}
            src={imageUrl}
            width={300}
          />
          <UploadButton
            className="col-span-full"
            endpoint={endpoint}
            onClientUploadComplete={(res: UploadResponse[]) => {
              console.log("Files: ", res);
              if (res && res.length > 0) {
                setImageUrl(res[0].url);
              }
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
