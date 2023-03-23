import {useMedia} from '../../hooks/apiHooks';
import MediaRow from './Mediarow';


const MediaTable = () => {
  const {mediaArray} = useMedia();
  return (
    <table>
      <tbody>
        {mediaArray.map((item, index) => {
          return <MediaRow key={index} file={item} />;
        })}
      </tbody>
    </table>
  );
};

export default MediaTable;