import JsonLd from '@/components/JsonLd';
import ServicePage from '@/components/ServicePage';
import { services } from '@/data/services';
import { servicePageGraph } from '@/lib/schema';
import { serviceMetadata } from '@/lib/serviceMetadata';

const service = services.whatsapp;

export const metadata = serviceMetadata(service);

export default function Page() {
  return (
    <>
      <JsonLd data={servicePageGraph(service)} />
      <ServicePage service={service} />
    </>
  );
}
