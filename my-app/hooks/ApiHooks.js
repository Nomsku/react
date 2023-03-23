import {baseUrl} from '../src/utils/variables';
import {useEffect, useState} from 'react';

const doFetch = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  if (!response.ok) {
    const message = json.error
      ? `${json.message}: ${json.error}`
      : json.message;
    throw new Error(message || response.statusText);
  }
  return json;
};
const useMedia = () => {
  let [mediaArray, setArray] = useState([]);
  const getMedia = async () => {
    try {
      const files = await doFetch((baseUrl + 'media'));
      const fileThumbnail = await Promise.all(
        files.map(async (file) => {
          const response = await fetch(baseUrl + 'media/' + file.file_id);
          return await response.json();
        })
      );
      setArray(fileThumbnail);
    } catch (error) {
      console.log('getMedia' + error.message);
    }
  };

  useEffect(() => {
    try {
      getMedia();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  
  return {mediaArray};
};

export {useMedia};
