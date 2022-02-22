import Link      from 'next/link'
import Image     from 'next/image'
import textImg   from '/public/images/logo/text.svg'
import letterImg from '/public/images/logo/letter.svg'
import PropTypes from 'prop-types'

function Logo({ onlyText = false }) {

    const logoLetterJsx = (
        <div className="m-auto h-3/4 w-3/4 absolute inset-x-0 opacity-10">
            <Image alt="Zefir letter logo" src={ letterImg } layout='fill' objectFit='contain' />
        </div>
    )

    const logoLetter = onlyText ? '' : logoLetterJsx

    return (
        <Link href={'/'}>
            <a>
                <div className="flex items-center justify-center h-full relative lg:mb-0 mb-1.5">
                    <div className="w-20 h-20 min-sm:w-24 min-sm:h-24 ">
                        <Image alt="Zefir text logo" src={ textImg } layout="fill" objectFit='contain' />
                    </div>
                    { logoLetter }
                </div>
            </a>
        </Link>
    )
}

Logo.propTypes = {
    onlyText: PropTypes.bool
}

export default Logo