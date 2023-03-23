import PropTypes from 'prop-types';
import {baseUrl} from '../utils/variables';
import {useEffect, useState} from 'react';
import MediaRow from './Mediarow';

const MediaTable = () => {
  let [mediaArray, setArray] = useState([]);
  const getMedia = async () => {
    const response = await fetch(baseUrl + 'media');
    const files = await response.json();
    const fileThumbnail = await Promise.all(
      files.map(async (file) => {
        const response = await fetch(baseUrl + 'media/' + file.file_id);
        return await response.json();
      })
    );
    setArray(fileThumbnail);
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