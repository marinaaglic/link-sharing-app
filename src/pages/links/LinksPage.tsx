import CustomizeLinks from "../../components/customizeLinks/CustomizeLinks";
import { PageContainer } from "../../components/layout/PageContainer";

export default function LinksPage() {
  return (
    <div>
      <PageContainer children={<CustomizeLinks />} />
    </div>
  );
}
