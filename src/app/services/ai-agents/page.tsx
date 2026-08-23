import JsonLd from '@/components/JsonLd';
import ServicePage from '@/components/ServicePage';
import { services } from '@/data/services';
import { fetchPexelsImage } from '@/lib/pexels';
import { servicePageGraph } from '@/lib/schema';
import { serviceMetadata } from '@/lib/serviceMetadata';

const service = services.agents;

export const metadata = serviceMetadata(service);

export default async function Page() {
  const cover = await fetchPexelsImage(service.imageQuery, service.imageAlt);

  return (
    <>
      <JsonLd data={servicePageGraph(service)} />
      <ServicePage service={service} cover={cover} />
    </>
  );
}
