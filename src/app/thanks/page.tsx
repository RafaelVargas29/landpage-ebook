import styles from '../page.module.css';

export default function Thanks() {
  return (
    <div className="bg-landWhite h-screen flex justify-center items-center relative">
      <div
        className={`
          flex flex-col
          gap-12 md:gap-10
          relative
          bg-landGray 
          sm:rounded-lg
          m-auto
          h-screen sm:h-[450px] md:h-[500px] lg:h-[550px]
          w-full sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1000px]
          justify-center
          items-center
          text-landWhite
          z-20
        `}
      >
        <h1
          className="
            text-4xl md:text-5xl
            font-bold
          "
        >
          Obrigado!
        </h1>

        <p
          className="
            text-xs md:text-lg
          "
        >
          Você receberá seu ebook em seu número de WhatsApp.
        </p>

        <div
          className={`
            absolute 
            ${styles.detective}
            hidden sm:block 
            sm:w-[60px] md:w-[70px] lg:w-[80px]
            sm:h-[125px] md:h-[135x] lg:h-[145px]  
            sm:-bottom-0 md:-bottom-0
            right-[-50px]
            bg-cover
            z-10
            no-repeat
          `}
        />
      </div>
    </div>
  );
}
