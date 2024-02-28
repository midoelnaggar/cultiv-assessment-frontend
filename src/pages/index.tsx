import ContactCards from "@/components/ContactCards/ContactCards";
import HomeActions from "@/components/HomeActions/HomeActions";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex flex-col w-screen items-center grow px-24 py-8">
        <HomeActions />
        <ContactCards />
      </div>
    </DefaultLayout>
  );
}
