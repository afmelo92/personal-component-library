/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState, useEffect } from 'react';
import { getIcon } from '../../../utils/getIcon';

import * as S from './styles';

const INITIAL_VALUES = {
  inputRef: null,
  error: {
    status: false,
    message: '',
  },
};

function Upload({
  files = [],
  setFiles,
  loading = false,
  size = 'medium',
  title = 'Upload',
  accept = '',
  id,
  multiple = true,
  filesSizelimit = 2048,
  ...rest
}) {
  const inputRef = useRef(INITIAL_VALUES.inputRef);
  const [error, setError] = useState(INITIAL_VALUES.error);

  const handleOpenInput = () => {
    inputRef?.current.click();
  };

  const formatSize = (sizeInBytes) => {
    if (sizeInBytes < 1024) {
      return `${sizeInBytes} bytes`;
    } if (sizeInBytes >= 1024 && sizeInBytes < 1048576) {
      return `${(sizeInBytes / 1024).toFixed(1)} KB`;
    } if (sizeInBytes >= 1048576) {
      return `${(sizeInBytes / 1048576).toFixed(1)} MB`;
    }
    return null;
  };

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setFiles((prev) => Array.from([...prev, ...e.target.files]));
    }
  };

  const handleDeleteUploadItem = (filesIndex) => {
    setFiles((prev) => prev.filter((_, index) => index !== filesIndex));
  };

  useEffect(() => {
    if (formatSize(files.reduce((acc, curr) => acc + curr.size, 0)) > formatSize(filesSizelimit)) {
      return setError({
        status: true,
        message: 'Tamanho máximo de arquivos excedido.',
      });
    }

    return setError(INITIAL_VALUES.error);
  }, [files]);

  return (
    <>
      <S.Container
        onClick={handleOpenInput}
        title={error.status ? error.message : title}
        size={size}
        error={error.status}
        $loading={loading}
        id={id}
      >
        <h1>{title}</h1>

        {getIcon({ icon: 'upload' })}

        <S.Info
          error={error.status}
        >
          <h4>{`Formatos aceitos: ${accept}`}</h4>
          <h5>{`Limite de tamanho de arquivos: ${formatSize(filesSizelimit)}`}</h5>
          {files.length > 0 && (
            <h5>{`Tamanho total: ${formatSize(files.reduce((acc, curr) => acc + curr.size, 0))}`}</h5>
          )}
        </S.Info>

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleChange}
          multiple={multiple}
          disabled={error.status || loading}
          {...rest}
        />
      </S.Container>

      {files.length > 0 && (
        <S.UploadsContainer>

          {files.map((item, index) => (
            <S.UploadItem
              title={item.name}
              key={item.lastModified}
            >
              {getIcon({ icon: 'file' })}
              <small>{item.name}</small>
              <button
                type="button"
                title={`Excluir arquivo ${index + 1}`}
                aria-label={`Excluir arquivo ${index + 1}`}
                onClick={() => handleDeleteUploadItem(index)}
              >
                {getIcon({ icon: 'close', strokeWidth: 8 })}
              </button>
            </S.UploadItem>
          ))}

        </S.UploadsContainer>
      )}
    </>
  );
}

export default Upload;
