import { useState } from 'react'

type ProfileImageProps = { src?: string; alt?: string }

export function ProfileImage({
  src = `${import.meta.env.BASE_URL}images/profile-ky-720.jpg`,
  alt = 'Kylah May Montealegre wearing her graduation gown and academic medal',
}: ProfileImageProps) {
  const [failedSrc, setFailedSrc] = useState<string>()
  return <figure className="profile-image">
    {src && failedSrc !== src
      ? <img src={src} alt={alt} width="720" height="720" loading="lazy" decoding="async" onError={() => setFailedSrc(src)} />
      : <div className="profile-placeholder"><span aria-hidden="true">ky<span>.</span></span><p>Portrait of Kylah May Montealegre<br />Image currently unavailable</p></div>}
  </figure>
}
