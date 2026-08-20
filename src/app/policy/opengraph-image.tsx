import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";
import { company } from "@/components/data/company";

export const size = socialImageSize;
export const contentType = socialImageContentType;

const pageMetadata = company.metadata.pages.policy;

export default function Image() {
  return createSocialImage({
    eyebrow: pageMetadata.title,
    title: pageMetadata.socialImageTitle,
    description: pageMetadata.description,
  });
}
