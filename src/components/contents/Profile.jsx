import React, { useContext } from "react";
import { LanguageContext } from "../../hooks/LanguageContext";

const Profile = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div
      style={{
        padding: "2rem 0",
        marginTop: "3rem",
      }}
      className="border-t border-[#BAB2E7] flex flex-col gap-10 items-center lg:items-start"
    >
      <span className="font-inter font-semibold text-5xl text-secondary">
        {lang === "en" ? "Profile" : "Profil"}
      </span>

      <div className="lg:flex lg:flex-row lg:items-start gap-16 flex flex-col items-center">
        <div className="w-2/5 flex flex-col gap-6">
          <span className="font-inter font-medium text-3xl text-placeholder">
            {lang === "en" ? "Profile" : "Profil"}
          </span>

          <div className="flex items-start gap-16">
            <div className="flex flex-col items-start gap-4">
              <span className="font-inter font-semibold text-lg text-tertiary">
                {lang === "en" ? "Date of Birth" : "Doğum Tarihi"}
              </span>
              <span className="font-inter font-semibold text-lg text-tertiary">
                {lang === "en" ? "City" : "İkamet Şehri"}
              </span>
              <span className="font-inter font-semibold text-lg text-tertiary">
                {lang === "en" ? "Education" : "Eğitim Durumu"}
              </span>
              <span className="font-inter font-semibold text-lg text-tertiary">
                {lang === "en" ? "Preferred Role" : "Tercih Ettiği Rol"}
              </span>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="font-inter font-normal text-lg text-tertiary">
                24.03.1996
              </span>
              <span className="font-inter font-normal text-lg text-tertiary">
                Ankara
              </span>
              <span className="font-inter font-normal text-lg text-tertiary">
                {lang === "en"
                  ? "Hacettepe University Biology, 2016"
                  : "Hacettepe Ünv. Biyoloji Lisans, 2016"}
              </span>
              <span className="font-inter font-normal text-lg text-tertiary">
                FrontEnd, UI
              </span>
            </div>
          </div>
        </div>

        <div className="w-3/5 flex flex-col gap-4">
          <span className="font-inter font-medium text-3xl  text-placeholder">
            {lang === "en" ? "About" : "Hakkında"}
          </span>

          <p className="font-inter font-normal text-lg leading-[150%] text-tertiary">
            {lang === "en"
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet laudantium et exercitationem. Quod expedita doloribus velit temporibus eaque."
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet laudantium et exercitationem. Quod expedita doloribus velit temporibus eaque."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
