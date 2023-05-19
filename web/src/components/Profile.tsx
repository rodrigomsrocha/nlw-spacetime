import Image from 'next/image'
import { getUser } from '~/lib/auth'

export function Profile() {
  const { name, avatarURL } = getUser()
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarURL}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a
          className="block text-red-400 transition-colors hover:text-red-300"
          href=""
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
