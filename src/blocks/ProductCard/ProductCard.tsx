import { Link } from "react-router-dom";
import {Button} from '../../components/Button/Button'
/*import { ReactComponent as HeartEmpty } from "../../img/heart-empty.svg";*/
import {
    Wrapper,
    LikeWrapper,
    Image,
    PriceWrapper,
    PriceRegular,
    PriceRegularWhenDiscounted,
    PriceDiscounted,
    Title,
    Desc
} from "./styled";

interface I_ProductCardProps{
    id: number
    slug?: string
    imgSrc: string
    priceRegular: number
    priceDiscounted?: number
    title: string
    desc: string
    //isLiked: boolean
    hideLikes?: boolean
}

const ProductCard: React.FC<I_ProductCardProps> = ({
    id,
    slug,
    imgSrc,
    priceRegular,
    priceDiscounted,
    title,
    desc,
    // isLiked,
    hideLikes = false,

    })=> {
    // const dispatch = useDispatch()

    //const handleFavorites = useCallback((e: React.MouseEvent<HTMLElement>) => {
    //  const { productId } = e.currentTarget.dataset
    //
    //  dispatch(
    //  !isLiked
    //      ? addToFavorites(+productId!)
    //      : removeFromFavorites(+productId!)
    //   )
    //  }, [dispatch, isLiked ])

return (
        <Wrapper>
            {!hideLikes && (
                <LikeWrapper
                    data-product-id={id}
                    // onClick={handleFavorites}
                >
                    {/*{isLiked ? <HeartFilled /> : <HeartEmpty /> }*/}
                    {/*<HeartEmpty />*/}
                </LikeWrapper>
            )}

            <Link to={`/product/${slug || id}`}>
                <Image src={imgSrc} />
            </Link>

            <PriceWrapper>
                {Number.isInteger( priceDiscounted ) ? <>
                <PriceDiscounted>{ priceDiscounted } Є</PriceDiscounted>
                <PriceRegularWhenDiscounted>{ priceRegular } Є</PriceRegularWhenDiscounted>
                </> : (
                    <PriceRegular>{ priceRegular } Є</PriceRegular>
                )}
            </PriceWrapper>

            <Title className='h4'>
                <Link to={`/product/${slug || id}`}>
                    { title }
                </Link>
            </Title>

            <Desc> { desc } </Desc>

            <Button>В корзину</Button>

        </Wrapper>
    )
}

export default ProductCard;