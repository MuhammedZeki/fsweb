import React from "react";

const Profile = () => {
  return (
    <div
      style={{
        padding: "2rem 0",
        marginTop: "3rem",
      }}
      className="border-t border-[#BAB2E7] flex-col gap-6"
    >
      <span className="font-inter font-semibold text-5xl text-[#1F2937]">
        Profile
      </span>
      <div className="lg:flex lg:flex-row lg:items-start gap-16 flex-col items-center">
        <div className="w-2/5 flex-col gap-4">
          <span className="font-inter font-medium text-3xl text-[#4338CA]">
            Profile
          </span>
          <div className="flex-col gap-4">
            <div className="d-flex items-center justify-start gap-24 ">
              <span className="font-inter font-semibold text-lg text-black">
                Doğum tarihi
              </span>
              <span className="font-inter font-normal text-lg text-black">
                24.03.1996
              </span>
            </div>
            <div className="d-flex items-center justify-start gap-25 ">
              <span className="font-inter font-semibold text-lg text-black">
                İkamet Şehri
              </span>
              <span className="font-inter font-normal text-lg text-black">
                Ankara
              </span>
            </div>
            <div className="d-flex items-center justify-start gap-20 ">
              <span className="font-inter font-semibold text-lg text-black">
                Eğitim Durumu
              </span>
              <span className="font-inter font-normal text-lg text-black">
                Hacettepe Ünv. Biyoloji Lisans, 2016
              </span>
            </div>
            <div className="d-flex items-center justify-start gap-19 ">
              <span className="font-inter font-semibold text-lg text-black">
                Tercih Ettiği Rol
              </span>
              <span className="font-inter font-normal text-lg text-black">
                FrontEnd, UI
              </span>
            </div>
          </div>
        </div>
        <div className="w-3/5  flex-col gap-4">
          <span className="font-inter font-medium text-3xl text-[#4338CA]">
            About
          </span>
          <p className="font-inter font-normal text-lg leading-[150%] tex-[#6B7280]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            amet laudantium et exercitationem. Quod expedita doloribus velit
            temporibus eaque. Eveniet ea, maiores esse quibusdam, ad inventore
            placeat velit neque quia minima iusto? Ut, id rerum. Ea minima
            temporibus molestias facere. Laudantium voluptate reprehenderit
            libero dolore ipsa fugit earum excepturi sapiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
