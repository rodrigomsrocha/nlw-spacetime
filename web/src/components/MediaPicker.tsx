'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  const [isMediaVideo, setIsMediaVideo] = useState(false)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setIsMediaVideo(!!files[0].type.startsWith('video'))
    setPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        name="coverURL"
        id="media"
        accept="image/*,video/*"
        className="invisible h-0 w-0"
      />
      {preview && isMediaVideo ? (
        <video
          src={preview}
          controls
          className="aspect-video w-full rounded-lg object-cover"
        ></video>
      ) : (
        preview &&
        !isMediaVideo && (
          // eslint-disable-next-line
          <img
            src={preview}
            alt=""
            className="aspect-video w-full rounded-lg object-cover"
          />
        )
      )}
    </>
  )
}
