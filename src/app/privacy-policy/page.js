import React, { Fragment } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Privacy-policy",
};

function page() {
  return (
    <Fragment>
      <Header></Header>
      <section className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-start mt-14 px-14 sm:px-16 md:px-20 py-10 lg:px-24 xl:px-28 mb-20">
        <div className="flex flex-col gap-2 lg:items-start">
          <h1 className="text-[30px] font-bold text-[#1D3444]">
            Privacy Policy
          </h1>
          <p className="text-[#5B5B5B]">Last modification: 1/8/2023</p>
        </div>
        <p className="text-[#5B5B5B]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo
          est laoreet metus maximus, in ornare nulla mattis. Vestibulum at quam
          enim. Quisque efficitur et purus quis venenatis. Pellentesque volutpat
          nunc ac purus tincidunt, sit amet bibendum tortor ultricies. Integer
          vel est sem. Integer malesuada massa in magna vehicula, sit amet
          lacinia quam faucibus. Duis luctus consequat nisi, id consequat urna
          vehicula eget. Pellentesque id metus aliquam, venenatis nunc non,
          consectetur sem. Morbi tristique ac elit a ullamcorper.
        </p>
        <p className="text-[#5B5B5B]">
          Pellentesque porttitor finibus dapibus. Praesent elementum nibh vitae
          nulla aliquet egestas. Duis quis ipsum sollicitudin, consectetur leo
          quis, dictum elit. Aenean ipsum tortor, blandit in ligula id, pharetra
          aliquet augue. Morbi sit amet rhoncus ante. Aliquam mi eros, accumsan
          in hendrerit sed, mollis at sapien. In rutrum tortor turpis, sit amet
          tincidunt arcu vestibulum nec.
        </p>
        <h4 className="text-[18px] font-semibold text-[#1D3444]">
          Who We Are and What This Policy Covers
        </h4>
        <p className="text-[#5B5B5B]">
          Maecenas laoreet dui et lacinia iaculis. Praesent lobortis iaculis
          turpis in vulputate. Aenean eu nunc nec ante posuere malesuada vel in
          ipsum. Mauris convallis ex sed ultrices semper. Phasellus vehicula
          cursus nulla nec malesuada. Nullam vestibulum accumsan arcu, et
          vulputate tellus egestas non. Maecenas suscipit tincidunt vehicula.
          Proin feugiat interdum enim, vitae eleifend mi blandit mollis. Nunc
          accumsan nibh elit, in iaculis mauris blandit ut. Vivamus pellentesque
          ornare ligula, et accumsan dolor sodales sed. Nam vel metus sed ante
          egestas bibendum ut vitae ex. Aliquam sed luctus quam, ac fermentum
          magna. Ut porttitor eros eget ligula porttitor, ac finibus tellus
          venenatis. Phasellus et mauris id erat finibus ornare maximus ac
          purus. Nulla nibh orci, rhoncus in malesuada ac, finibus nec dolor.
        </p>
        <p className="text-[#5B5B5B]">
          Aenean maximus, felis in pulvinar efficitur, eros lorem tempus nibh,
          nec vestibulum arcu felis luctus lectus. In sit amet cursus nibh. In
          turpis erat, finibus eget ultricies vitae, ullamcorper eget sem.
          Maecenas in lectus a neque sollicitudin ultrices. Cras ultricies dui
          mattis tincidunt fermentum. Nunc suscipit massa erat, at vehicula erat
          faucibus non. Pellentesque elementum turpis at sapien luctus mattis.
          Vivamus felis mi, cursus quis elit ac, pellentesque malesuada erat.
        </p>
        <h4 className="text-[18px] font-semibold text-[#1D3444]">
          Information We Collect
        </h4>
        <p className="text-[#5B5B5B]">
          Nulla in ligula nec lorem imperdiet vulputate. Donec at metus
          hendrerit, convallis dolor mollis, tincidunt felis. Aliquam tortor
          nulla, fringilla commodo mollis sed, volutpat sed urna. Vestibulum
          sollicitudin feugiat sapien id tincidunt. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Cras
          pharetra tristique tellus et condimentum. Mauris ullamcorper arcu eget
          tincidunt dignissim. Fusce sed nunc leo. Nulla nisl tellus, lobortis
          quis varius eget, porttitor non nisl. Praesent tristique consectetur
          lacus, sed aliquet erat accumsan sit amet. Nunc eu ante orci. Nulla at
          gravida magna. Nulla in congue felis, nec cursus eros. Mauris ut
          placerat lacus. Mauris lorem elit, aliquam non erat nec, viverra
          lobortis dui.
        </p>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
