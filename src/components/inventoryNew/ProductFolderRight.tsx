import { useState } from "react";
import { Upload } from "lucide-react";
import { FaCloudUploadAlt } from "react-icons/fa"; // Removed delete icon
import image from "../../assets/images/image.png"; // Default image
import { Button } from "../ui/Button";

const ProductFolderRight = () => {
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [additionalImages, setAdditionalImages] = useState<string[]>([]);

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    isMain: boolean
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target?.result as string;
        if (isMain) {
          setMainImage(imageDataUrl);
        } else {
          setAdditionalImages((prev) => [...prev, imageDataUrl]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const ImageBox = ({
    src,
    onUpload,
  }: {
    src: string | null;
    onUpload: () => void;
  }) => (
    <div
      className={`border rounded-lg p-4 space-y-2 relative ${
        !src ? "border-dashed" : "border-solid"
      }`}
    >
      {src ? (
        <>
          <img
            src={src}
            alt="Uploaded image"
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute top-2 right-2 flex space-x-2 bg-black p-2 rounded-full">
            <Button size="icon" variant="secondary" onClick={onUpload}>
              <FaCloudUploadAlt className="h-4 w-4 text-white" />
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-40 space-y-2">
          <Upload className="h-8 w-8 text-blue-600" />
          <span className="font-medium text-blue-600 md:text-xl text-sm text-center">
            Upload Image
          </span>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onUpload()}
      />
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto md:p-4 space-y-4">
      <div className="border rounded-lg p-4 space-y-0 bg-gray-100 md:pb-20 relative">
        {mainImage ? (
          <img
            src={mainImage}
            alt="Uploaded image"
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <div className="aspect-square w-full max-w-[160px] mx-auto flex items-center justify-center -mb-6">
            <img
              src={image}
              alt="Default photo"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
        )}

        {!mainImage && (
          <div className="flex items-center justify-center space-x-0 md:pb-2">
            <Upload size={20} className="text-blue-600 -mr-2" />
            <Button
              className="font-medium text-blue-600 md:text-xl text-sm"
              onClick={() =>
                document.getElementById("mainImageUpload")?.click()
              }
            >
              Upload Image
            </Button>
          </div>
        )}
        {!mainImage && (
          <div className="text-[15px] text-gray-500 text-center font-normal">
            Upload a cover image for your product
          </div>
        )}
        {!mainImage && (
          <div className="text-sm text-gray-500 text-center font-normal">
            File Format: jpeg, png Recommended Size: 600x600 (1:1)
          </div>
        )}

        <input
          id="mainImageUpload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleImageUpload(e, true)}
        />
      </div>
      <div>
        <h3 className="font-medium mb-2">Additional Images</h3>
        <div className="grid grid-cols-2 gap-4">
          <ImageBox
            src={additionalImages[0] || null}
            onUpload={() =>
              document.getElementById("additionalImageUpload")?.click()
            }
          />

          <div className="border-dashed border-2 rounded-lg p-4 space-y-2">
            {additionalImages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-40 space-y-2">
                <Upload className="h-8 w-8 text-blue-600" />
                <span className="font-medium text-blue-600 md:text-xl text-sm text-center">
                  Upload Image
                </span>
              </div>
            )}
            <input
              id="additionalImageUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e, false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFolderRight;
