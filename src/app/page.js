"use client";
import {
  Missions,
  ProductSection,
  References,
  Typography,
  ListFeatures,
  Hero,
  FeaturesV2
} from "ecommerce-mxtech";
import { MdOutlineArchitecture } from "react-icons/md";
import { useRouter } from "next/navigation";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { useInformation } from "@/store/useInformation";
import { backgroundColor, primaryColor } from "@/data";


export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();
  return (
    <main
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Navbar />
      <Hero
        contentThirdSection={
          <Typography.Title className=" drop-shadow-sm text-yellow-300">
            The best services for you
          </Typography.Title>
        }
        variant="background-img"
        src={dataSite.image_hero}
        withSubView
        title={dataSite.subtitle}
        description={dataSite.description}
        srcSecondary={dataSite.image_hero2}
        colorText={primaryColor}
      />
      <div className="container mx-auto flex flex-col gap-20 my-24">
        <div className="flex flex-col">
          <Typography.Title
            level={3}
            className="font-medium mb-10 text-center"
          >
            Features
          </Typography.Title>
          <ListFeatures
            stylesContainer={{
              borderColor: { primaryColor },
              borderWidth: 2,
              padding: 10,
              borderRadius: 10,
            }}
            src={dataSite.image_hero2}
            features={dataSite.services.map((feature) => ({
              icon: <MdOutlineArchitecture />,
              title: feature.title,

              color: { primaryColor },
            }))}
          />
        </div>
        <div id="products">
          {dataSite.products.length > 1 && (
            <ProductSection
              withTitles={false}
              gridColumns={3}
              variant="grid"
              productItemVariant="horizontal"
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              stylesItem={{
                backgroundColor: { primaryColor },
                borderRadius: 10,
              }}
              productVersion="2"
              carouselOptions={{
                backgroundColor: "transparent",
                arrowColor: "blue"
              }}
            />
          )}
        </div>
        <div className="flex flex-col" id="features">
          <FeaturesV2
            features={dataSite.services.map((feature) => ({
              title: feature.title,
              description: feature.description,
              src: feature.image,
            }))}
            onClickButton={() => {
              router.push("/more-information")
            }}
            gridColumns={3}
            backgroundColor={primaryColor}
            borderRadius={10}
            variant="text"
            textColorDescription={primaryColor}
            version="v2"
          />
        </div>
        <div className="flex flex-col" id="our-services">
          <Typography.Title
            level={3}
            className="text-white font-medium mb-10 text-center"
          >
            Know Us
          </Typography.Title>
          <Missions
            data={dataSite.info}
            gridColumns={3}
            backgroundColor={primaryColor}
            borderRadius={10}
            variant="text"
          />
        </div>

        <div className="flex flex-col" id="references">
          <Typography.Title
            level={3}
            className="font-medium mb-10 text-center"
          >
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: "black",
              fade: true,
              autoPlay: false,
              direction: "horizontal",
            }}
            variantItem="text"
            variant="carousel"
            backgroundColor={primaryColor}
            borderRadius={10}
            references={dataSite.references}
            gridColumns={3}
            titleAlign="center"
          />
        </div>

      </div>

      <Footer />
    </main>
  );
}
