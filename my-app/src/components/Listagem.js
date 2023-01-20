import styles from './layout/NavBar.module.css'

function Listagem() {

    const suplementos = [
        {
            marca: 'Dux Nutrition',
            sabor: 'Alfajor',
            peso: '900g'
        },

        {
            marca: 'Growth',
            sabor: 'Mousse de Maracuja',
            peso: '1kg'
        },

        {
            marca: 'Max Titanium',
            sabor: 'Cokies and Cream',
            peso: '900g'
        }, 
    ]

    return(
        <div>
            <h3>Suplementos dos crias</h3>
            {
            suplementos.map((item,index) => {
                return (
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <p>{item.marca}</p>
                        </div>
                        <div className={styles.list}>
                            <p>{item.sabor}</p>
                        </div>
                        <div className={styles.list}>
                            <p>{item.peso}</p>
                        </div>
                    </div>
                )
            } ) }
        </div>
    )
}
export default Listagem