import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";
import { company } from "@/components/data/company";

export const size = socialImageSize;
export const contentType = socialImageContentType;

const imageMetadata = company.metadata.socialImage;

export default function Image() {
  return createSocialImage({
    eyebrow: imageMetadata.eyebrow,
    title: imageMetadata.title,
    description: imageMetadata.description,
  });
}
