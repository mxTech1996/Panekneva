'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  Hero,
  FeaturesV2,
  ListFeatures,
} from 'ecommerce-mxtech';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';
import { primaryColor } from '@/data';
import { MdOutlineEmojiTransportation } from 'react-icons/md';

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();

  console.log(dataSite);
  return (
    <main
      style={{
        backgroundColor: '#F5F4D3FF',
      }}
    >
      <Navbar />
      <div className='relative'>
        <Hero
          images={[dataSite.image_hero, dataSite.image_hero2]}
          withSubView
          variant='carousel'
          stylesContainerImage={{
            height: '85vh',
          }}
          styleImage={{
            height: '85vh',
          }}
          title={dataSite.subtitle}
          description={dataSite.description}
          srcSecondary={dataSite.image_hero2}
          withShadowText
          autoplay={true}
        />
      </div>
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div className='flex flex-col' id='our-services'>
          <Typography.Title
            level={3}
            className='font-medium mb-10 text-center text-black'
          >
            Our
          </Typography.Title>
          <ListFeatures
            stylesContainer={{
              borderColor: '#7C8745FF',
              borderWidth: 2,
              padding: 10,
              borderRadius: 10,
            }}
            src={dataSite.image_hero2}
            features={dataSite.services.map((feature) => ({
              icon: <MdOutlineEmojiTransportation />,
              title: feature.title,

              color: '#7C8745FF',
            }))}
          />
        </div>

        <div id='courses'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={true}
              title='All Courses'
              gridColumns={2}
              variant='carousel'
              productsPerPage={1}
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              productVersion='1'
              carouselOptions={{
                backgroundColor: 'transparent',
                arrowColor: primaryColor,
                fade: true,
                autoPlay: false,
                direction: 'horizontal',
              }}
              backgroundItemColor='#FEFFE2FF'
              stylesItem={{
                borderRadius: 12,
              }}
            />
          )}
        </div>

        <div className='flex flex-col' id='know-us'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Know Us
          </Typography.Title>
          <Missions data={dataSite.info} gridColumns={3} variant='card' />
        </div>

        <div className='flex flex-col' id='references'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            variantItem='text'
            variant='carousel'
            backgroundColor='#E5D9BAFF'
            references={dataSite.references}
            gridColumns={3}
            titleAlign='center'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
