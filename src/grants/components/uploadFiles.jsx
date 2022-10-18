import React, {
  useState,
  useCallback,
  useMemo,
  useContext,
  useEffect,
} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { GrantSetupContext } from './grantSetup';

import { useDropzone } from 'react-dropzone';
import Close from '../../assets/icon/snapbrillia_close_icon.svg';
import Valid from '../../assets/icon/snapbrillia_check_icon.svg';
import Invalid from '../../assets/icon/snapbrillia_red_cross_icon.svg';

import '../css/uploadFiles.css';

const UploadFiles = () => {
  const { data, setData } = useContext(GrantSetupContext);
  const [file, setFile] = useState(data.projectLogo);
  useEffect(() => {
    setData({ ...data, projectLogo: file });
  }, [file]);

  const truncatedFilePath = (path) => {
    const index = path.lastIndexOf('.');
    console.log('index', index);
    const formatted = [
      path.slice(0, path.lastIndexOf('.')),
      path.slice(path.lastIndexOf('.')),
    ];

    console.log('formatted', formatted);
    return formatted[0].length > 20
      ? formatted[0].substring(0, 17) +
          '...' +
          formatted[0].substring(formatted[0].length - 3) +
          formatted[1]
      : path;
  };

  const formatSizeUnits = (bytes, decimals) => {
    if (bytes === 0) {
      return '0 Bytes';
    }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Fred Note: Do something with the files here
  }, []);

  const focusedStyle = {
    borderColor: '#5b8c00',
  };

  const acceptStyle = {
    background: `hsl(0, 0%, 23%, 50%)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'all 0.5s ease-in-out',
    // filter: "blur(0.8px)",
  };

  const rejectStyle = {
    // borderColor: "#ee7959",
    background: `hsl(0, 0%, 23%, 50%)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'all 0.5s ease-in-out',
  };

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    // onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/gif': [],
      // "application/vnd.ms-excel": [],
    },
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      return acceptedFiles.length === 0
        ? null
        : setFile(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
    },
  });

  const style = useMemo(
    () => ({
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const thumb = {
    display: 'inline-flex',
    borderRadius: 12,
    border: '4px dashed #d0d0d0',
    marginBottom: 8,
    marginLeft: 8,
    height: 120,
    padding: 4,
    boxSizing: 'border-box',
    position: 'relative',
  };

  const thumbInner = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minWidth: 0,
    overflow: 'hidden',
  };

  const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
  };

  return (
    <Row className="gx-0 drop-box">
      <Col
        {...getRootProps({ style })}
        className="image-drop-container import-candidate-text"
      >
        {isDragAccept && (
          <div style={{ position: 'absolute' }}>
            <img src={Valid} alt="valid-icon" />
          </div>
        )}
        {isDragReject && (
          <div style={{ position: 'absolute', transform: 'scale(1.2)' }}>
            <img src={Invalid} alt="invalid-icon" />
          </div>
        )}
        <div
          style={{
            transition: 'all 0.5s ease-in-out',
            filter: isDragAccept || isDragReject ? 'blur(1.5px)' : null,
          }}
        >
          <input {...getInputProps()} />
          <p className="drop-text" style={{ margin: 10 }}>
            <b>Drag</b> and <b>drop</b> your files here,
            <br />
            or <b>click</b> to select a file(JPEG, PNG, GIF).
            {file && (
              <div>
                <p className="upload-text">
                  Uploaded: {truncatedFilePath(file[0].path)} -{' '}
                  {formatSizeUnits(file[0].size, 2)}
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      // e.preventDefault();
                      setFile(null);
                      // eslint-disable-next-line no-const-assign
                    }}
                    style={{
                      left: 2,
                      position: 'relative',
                      bottom: 1,
                      display: 'inline-block',
                      transform: 'scale(0.6)',
                    }}
                  >
                    <img src={Close} alt="close-icon" />
                  </span>
                </p>
              </div>
            )}
          </p>
        </div>
      </Col>
      {file && (
        <Col
          xs={3}
          className="upload-preview-container"
          style={thumb}
          key={file[0].name}
        >
          <div style={thumbInner}>
            <img
              src={file[0].preview}
              style={img}
              // Revoke data uri after image is loaded
              /* onLoad={() => {
                URL.revokeObjectURL(file[0].preview);
              }} */
            />
            <div
              className="upload-preview-close"
              onClick={(e) => {
                setFile(null);
              }}
              style={{
                position: 'absolute',
                top: 2,
                right: 2,
                cursor: 'pointer',
                // display: "block",
                transform: 'scale(0.6)',
              }}
            >
              <img src={Close} alt="close-icon" />
            </div>
          </div>
        </Col>
      )}
    </Row>
  );
};

export default UploadFiles;
