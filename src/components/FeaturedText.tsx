
import  styles  from '../app/page.module.css'

export default function FeaturedText() {
    return (
        <>
            <div className='text-2xl md:text-5xl'>
                <p>24 funcionalidades</p>
                <p><span className={`${styles['geadiente-text']} `}>secretas</span> no seu iPhone</p>
                <p>que irá te surpreender</p>
            </div>
        </>
    )
}