import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        navigate('/error');
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex p-2">
        <img
          className="w-12 h-12 rounded-full"
          src="https://lh3.googleusercontent.com/fife/ALs6j_HXUCy1Z-wcyRcBynrsJMoFFw5l7Zx736Ymtu2PdE7W6zschoKLNVxL3vRIr87DFR3z5LPzDLeE92yVMVSTGqJ2up4XfMffSAGtXr2Ss145vgDTm01w65NllOMCoNKzlQB_y2TOL1__Yxk2HpdDjA__hw4f0ykHjxIBb6yUn2rqEULOhbeZMq7mUQv-7picumOevuIzY31egIWt0P-t8vCFXpAgi1gJcQ1qIXGWcBMewl2QX18YE47R4ZnY8tlacV4IbgcD8Lqi3SQeeX0Y6WCAgfUCL_QyXFV0TRg6Dj61w0IqhV0B74-eu6LbkqFmVM0M7XcZgexy4gbIbUCFD9bHjyehBwDghqIoi7KUlBBz7wP4kMPsanoIMfyUgbawXuXPF325lPHeAYE8aHuNo-KIwD_-E_wiGlmm7wPA5WIz_Kj2Cvj8VLoM9SZHC_WWwQ8KKn-JHNhEalWAEDBffsJhNCtAoBXDjkcypLvNZ-qdGrA1c5A2QV3q5SFOarECQ-oreZSwVB3p02q-8-D9woIuui5snta8yHGnr8LrbhD0gqKvTP2VwLPQeVRFaonIP2oVgeyeKmOi2zlHM00WnwH-Hwn-nytRo2uVPvZUvuobhcy_GskiIgxIlcknZk6SWnZvx20rwwfkwQHNdU8dm5D1tvd9llJT8H-ZuaaKbuMRGsgADK3V-IUegVZ5i12uQYY5szWqPcBO5lpaoAoM-BU4Go6FmGhQIwILNdpJ5hYHyfInyZK5NXUkMvflmcPF8fHrxM-90wZcqTbimfqc9H3hBj8jBdZmBameWTOrIRqomaoiLaDJobtPnYIg2fKseglvKTjbVMLOEcfKrOD_F8ewgCoqWwlp8rFZr0dIOmR0vsCI2FMhueuNIJOTNgtmuq2iTo7MA4Soz_IP9qTmD_TL9BlNqssOc3t_IVAhsVi2whVgl5RhH_lm547FbUf5B-vgbje-ijcaoKYJf6EMyyvVDdC_1IsZnCwqBidVirJgsF-v36nUiG-9xrcbTrzswQ5AdY6V_ocg68hoNw3WJ367NOjfg9rOa-k9m4qk4KN1RPEW5ezEZ8ejek0PITG5v-_qY1ATEgqFmUYcoHzYQDAOy7TnWvNtjmWDoShPNmy2mUzNofU8IUT809VIxi1ZDVzU_2R0Pcmmb8Dsdxrx1gRJmSoNKwg26O82uY4Th49Hl8ACpgXf08Vwt-F2KgXSiGm8qHsOf9OvUu2HpFAADmvLyGRtMkB8EqOhna0gofYMVp7LNHOQrQJM3Q5i5zOa68rQD41pGm8UpKddIv7kblcAYRdcDuYTv7yiekl3qyVPsX3DTp4AAkNiSgvSMcpbCMN6DbH3JbrVRlD7qHVGFy9S8KpnY6j-20WuV9lVMw4Mz9DZMe8XQ_rzOfi3i84=s32-c"
          alt="usericon"
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;
