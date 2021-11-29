import Image from 'next/image';
import s from './banner.module.css';

const Banner = (props) => {
  const { title, subTitle, imgUrl } = props;
  const handleOnPlay = () => {
    console.log('Handle on Play');
  };
  return (
    <div className={s.container}>
      <div className={s.leftWrapper}>
        <div className={s.left}>
          <div className={s.nseriesWrapper}>
            <div className={s.firstLetter}>N</div>
            <div className={s.series}>S E R I E S</div>
          </div>

          <h2 className={s.title}>{title}</h2>
          <h3 className={s.subTitle}>{subTitle}</h3>
          <div className={s.playBtnWrapper}>
            <button className={s.btnWithIcon} onClick={handleOnPlay}>
              <Image src="/static/play_arrow.svg" alt="Play_icon" width="32px" height="32px" />
              <span className={s.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={s.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
    </div>
  );
};

export default Banner;
