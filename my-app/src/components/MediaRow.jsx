import PropTypes from 'prop-types';
import {url} from '../utils/variables';

const MediaRow = ({file}) => {
  return (
    <tr>
      <td>
        <img src={url + file.thumbnails.w160} alt="Title" />
      </td>
      <td>
        <h3>{file.title}</h3>
        <p>{file.description}</p>
      </td>
      <td>
        <a href={file.filename}>View</a>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object.isRequired,
};

export default MediaRow;