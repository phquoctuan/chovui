// components/listings/ListingDetailContainer.tsx
import { RealEstateTemplate } from './templates/RealEstateTemplate';
import { VehicleTemplate } from './templates/VehicleTemplate';
import { DefaultTemplate } from './templates/DefaultTemplate';
import type {Listing} from "@/db/schema";
import { getTemplateByCategoryId } from '@/lib/cache/categories';
// Map categoryId hoặc category slug với Component tương ứng
// const TEMPLATE_REGISTRY: Record<string, React.ComponentType<{ listing: Listing }>> = {
const TEMPLATE_REGISTRY: Record<string, React.ComponentType<{ listing: any }>> = {
  //level 1
  'base': DefaultTemplate,
  'real-estate': RealEstateTemplate,
  'vehicles': VehicleTemplate,
  'electronics': DefaultTemplate,
  'jobs': DefaultTemplate,
  'home-services': DefaultTemplate,
  'pets': DefaultTemplate,
  'food': DefaultTemplate,
  'appliances': DefaultTemplate,
  'home-garden': DefaultTemplate,
  'baby-kids': DefaultTemplate,
  'fashion': DefaultTemplate,
  'hobbies': DefaultTemplate,
  'tools': DefaultTemplate,
  'services': DefaultTemplate,
  //level 2
};

export async function ListingDetailContainer({ listing }: { listing: Listing }) {
  // Lấy template từ categoryId (ví dụ: 'real-estate/buy-sell'')
  const listingCategory = listing.categoryId;//.split('_')[0] || listing.categoryId;

  // Lấy template tương ứng, nếu không có thì dùng DefaultTemplate
  const templateName = await getTemplateByCategoryId(listing.categoryId);
  const TemplateComponent = TEMPLATE_REGISTRY[templateName] || DefaultTemplate;

  return <TemplateComponent listing={listing} />;
}