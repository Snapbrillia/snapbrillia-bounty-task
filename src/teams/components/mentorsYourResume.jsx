import React, { useMemo } from 'react';
import { Col } from 'react-bootstrap';
import '../css/mentorsYourResume.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useDropzone } from 'react-dropzone';
import Close from '../../assets/icon/snapbrillia_close_icon.svg';
import Valid from '../../assets/icon/snapbrillia_check_icon.svg';
import Invalid from '../../assets/icon/snapbrillia_red_cross_icon.svg';
import { snapbrilliaFile } from '../../api/files';

const MentorsYourResume = ({user, resumeFile, setResumeFile}) => {
  const truncatedFilePath = (path) => {
    const formatted = [
      path.slice(0, path.lastIndexOf('.')),
      path.slice(path.lastIndexOf('.')),
    ];
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

  // const onDrop = useCallback((acceptedFiles) => {
  //   // Fred Note: Do something with the files here
  // }, []);

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

  let {
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
      'application/pdf': ['.pdf'],
    },
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      return acceptedFiles.length === 0
        ? null
        : setResumeFile(
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
    [isFocused, isDragAccept, isDragReject,]
  );
  return (
    <>
      <div className="mentors-your-resume-line-below">
        Upload Resume 
      </div>
      <div className="mentors-your-resume-line-below">
        {user?.resume && (
          <a href={snapbrilliaFile(user?.resume)} download="resume" target="_blank" rel="noreferrer">resume.pdf</a>
        )}
      </div>
      <form>
        <div>
          <Col
            {...getRootProps({ style })}
            className="drop-container import-candidate-text"
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
              <input {...getInputProps()} name="resume" />
              <p className="drop-text" style={{ margin: 10 }}>
                {!resumeFile && (
                  <>
                  <b>Drag</b> and <b>drop</b> your files here,
                  <br />
                  or <b>click</b> to select a file.
                  </>
                )}
                {resumeFile && (
                  <div>
                    <div className="upload-text">
                      Uploaded: {truncatedFilePath(resumeFile[0].path)} -{' '}
                      {formatSizeUnits(resumeFile[0].size, 2)}
                      <span
                        className="mentors-your-resume-upload"
                        onClick={(e) => {
                          e.stopPropagation();
                          // e.preventDefault();
                          setResumeFile(null);
                          acceptedFiles = [];
                        }}
                      >
                        <img src={Close} alt="close-icon" />
                      </span>
                    </div>
                  </div>
                )}
              </p>
            </div>
          </Col>
        </div>
      </form>
    </>
  );
};

export default MentorsYourResume;
