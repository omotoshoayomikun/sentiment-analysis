"use client";

import NavLink from "@/components/Nav/NavLink";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <NavLink />
      <div className="sidePadding w-full h-auto pb-14  mt-8">
        <h3 className="text-center text-[35px] mb-5 underline">How to Share Your Sentiments on Social Media</h3>
        <div className="flex gap-4">
          <div className="inline-block">
            <Image
              src={`/images/FirstBlog.jpg`}
              alt=""
              width={380}
              height={500}
              style={{ float: "left", marginRight: "20px" }}
            />
            {/* </div> */}
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam quis asperiores perspiciatis reprehenderit facere
              placeat, accusantium obcaecati sapiente earum vel. Fugit, enim
              saepe quidem facilis sapiente illum eius, voluptatem
              necessitatibus assumenda incidunt ut odit. Fuga asperiores qui
              magni voluptas minus voluptatibus quidem ex iusto, veniam
              suscipit? Sequi ducimus tempore eum soluta alias consectetur at
              repellat reprehenderit. Minima, consequuntur. Voluptates, ullam?
              Repellat quis expedita ut enim, deleniti tempore numquam mollitia
              non, ducimus corrupti autem esse? Laborum, ullam, iste quibusdam
              itaque cumque, id enim sequi atque animi unde tempora officiis
              saepe repellendus. Explicabo molestiae consequatur voluptatem,
              minima, velit libero nihil cum, labore porro laudantium voluptate
              autem. Fugiat dignissimos quasi exercitationem sit impedit fugit
              libero pariatur alias doloremque ipsum, cupiditate laudantium
              ipsam tempora neque laborum eum voluptates numquam ipsa tempore
              labore unde. Harum omnis a saepe facere odit nostrum sunt
              perspiciatis, sapiente quaerat laboriosam, quos sit aliquam velit
              laudantium aspernatur debitis sint alias reprehenderit enim quo
              ducimus, delectus doloribus. Dignissimos, quo autem aliquam a
              culpa ea quibusdam, et similique qui nobis sit velit recusandae
              dolorem error fuga. Accusantium ex, porro deleniti laborum eum
              neque a incidunt reiciendis earum nisi, voluptatem iure illo
              excepturi ab fugiat aut qui debitis assumenda corporis? Quasi,
              esse? Quo nemo et facere aspernatur fugit ratione, rerum nesciunt
              nobis in ipsam obcaecati itaque maiores eius? Asperiores,
              obcaecati neque. Id temporibus iure hic neque quos ex minus
              consequatur, cupiditate incidunt harum, magnam dignissimos dolore
              inventore recusandae sit iste cumque maiores mollitia ipsa
              molestiae nihil? Nisi possimus unde incidunt laboriosam qui nobis
              ea, dolorum asperiores aliquid accusamus rem, autem fuga commodi
              magnam. Veritatis neque deserunt quam vel optio asperiores aliquam
              recusandae veniam libero aliquid in, modi fuga. Perferendis,
              adipisci nam blanditiis quos omnis hic nostrum, veritatis commodi
              aut porro suscipit temporibus aperiam delectus odio eius.
              Repellendus illum est, vitae blanditiis ducimus ex. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Doloremque hic neque
              porro qui veniam aperiam numquam in! Omnis, accusantium at.
            </p>
          </div>
        </div>
        <style jsx>
          {`
            p::first-letter {
              text-transform: uppercase;
              font-size: 36px;
              }
              
              p {
                font-size: 20px;
            }
          `}
        </style>
      </div>
    </>
  );
}

export default page;
