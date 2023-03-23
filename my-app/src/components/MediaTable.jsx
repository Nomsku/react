import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import MediaRow from './Mediarow';

const MediaTable = () => {
  let [mediaArray, setArray] = useState([]);
  const getMedia = async () => {
    const response = await fetch('test.json');
    const json = await response.json();
    setArray(json);
  };
  
  useEffect(() => {
    try {
      getMedia();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  console.log(mediaArray);

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