import { ArrowRightIcon } from '@/components/Icons/ArrowRightIcon';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { productStyles } from '@/pages/product';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div>
            <Link to="/products" className={productStyles.back}>
                <ArrowRightIcon />
                Back
            </Link>
            <div>
                <div className={productStyles.product}>
                    <div className={productStyles.imgWrapper}>
                        <Button className={productStyles.leftImgBtn}>
                            <ArrowRightIcon color="white" />
                        </Button>
                        <img
                            src="https://s3-alpha-sig.figma.com/img/8471/6a9f/a3d3ee62b367357b71eec92436996e70?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TOuGxvNXBfSroIP6qVsTmP7AJIdutB0x1NDPMqSao6pEN6QXgt0Y6vVgeK6OGst~xxPJHPLcr3jOJ7uStP5uh6BCE-LS3hiyFIb7r6ahpSPJWQUNHIv6NlP9l7U2gFI7rY5v7AN8cI1H5viPuARrtMSIEvnPv3vUB0qE0KGSrSNAtJmBcj-7e5qFU5ULtZetxod3vXqBOezyyUBENp1SnrrnO0EGffxJsz3~uwBau7V3lVT9-0NISDe9LbXx3FgpYPWei5XYV-haHo2EboVbusHXh7mxDy~meNFeOmMU5AP4C5nb6MRaS-QfktZkCS7H4FFWuPy4dXK~XKr67kjWLQ__"
                            alt="chair"
                        />
                        <Button className={productStyles.rightImgBtn}>
                            <ArrowRightIcon color="white" />
                        </Button>
                    </div>
                    <div className={productStyles.productDesc}>
                        <div className={productStyles.text}>
                            <Text tag="h1">White Aesthetic Chair</Text>
                            <Text tag="span">
                                Ergonomic executive chair upholstered in bonded
                                black leather and PVC padded seat and back for
                                all-day comfort and support
                            </Text>
                        </div>

                        <div className={productStyles.productAction}>
                            <Text tag="h2">$99.98</Text>
                            <div className={productStyles.buttons}>
                                <Button className={productStyles.buyBtn}>
                                    Buy now
                                </Button>
                                <Button className={productStyles.cartBtn}>
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={productStyles.related}>
                    <Text tag="h3">Related items</Text>
                    <div className={productStyles.cards}>
                        <Card
                            image="https://s3-alpha-sig.figma.com/img/8471/6a9f/a3d3ee62b367357b71eec92436996e70?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TOuGxvNXBfSroIP6qVsTmP7AJIdutB0x1NDPMqSao6pEN6QXgt0Y6vVgeK6OGst~xxPJHPLcr3jOJ7uStP5uh6BCE-LS3hiyFIb7r6ahpSPJWQUNHIv6NlP9l7U2gFI7rY5v7AN8cI1H5viPuARrtMSIEvnPv3vUB0qE0KGSrSNAtJmBcj-7e5qFU5ULtZetxod3vXqBOezyyUBENp1SnrrnO0EGffxJsz3~uwBau7V3lVT9-0NISDe9LbXx3FgpYPWei5XYV-haHo2EboVbusHXh7mxDy~meNFeOmMU5AP4C5nb6MRaS-QfktZkCS7H4FFWuPy4dXK~XKr67kjWLQ__"
                            title="Title"
                            subtitle="Subtitle"
                            contentSlot="$20"
                            actionSlot={<Button>Add to cart</Button>}
                        />
                        <Card
                            image="https://s3-alpha-sig.figma.com/img/8471/6a9f/a3d3ee62b367357b71eec92436996e70?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TOuGxvNXBfSroIP6qVsTmP7AJIdutB0x1NDPMqSao6pEN6QXgt0Y6vVgeK6OGst~xxPJHPLcr3jOJ7uStP5uh6BCE-LS3hiyFIb7r6ahpSPJWQUNHIv6NlP9l7U2gFI7rY5v7AN8cI1H5viPuARrtMSIEvnPv3vUB0qE0KGSrSNAtJmBcj-7e5qFU5ULtZetxod3vXqBOezyyUBENp1SnrrnO0EGffxJsz3~uwBau7V3lVT9-0NISDe9LbXx3FgpYPWei5XYV-haHo2EboVbusHXh7mxDy~meNFeOmMU5AP4C5nb6MRaS-QfktZkCS7H4FFWuPy4dXK~XKr67kjWLQ__"
                            title="Title"
                            subtitle="Subtitle"
                            contentSlot="$20"
                            actionSlot={<Button>Add to cart</Button>}
                        />
                        <Card
                            image="https://s3-alpha-sig.figma.com/img/8471/6a9f/a3d3ee62b367357b71eec92436996e70?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TOuGxvNXBfSroIP6qVsTmP7AJIdutB0x1NDPMqSao6pEN6QXgt0Y6vVgeK6OGst~xxPJHPLcr3jOJ7uStP5uh6BCE-LS3hiyFIb7r6ahpSPJWQUNHIv6NlP9l7U2gFI7rY5v7AN8cI1H5viPuARrtMSIEvnPv3vUB0qE0KGSrSNAtJmBcj-7e5qFU5ULtZetxod3vXqBOezyyUBENp1SnrrnO0EGffxJsz3~uwBau7V3lVT9-0NISDe9LbXx3FgpYPWei5XYV-haHo2EboVbusHXh7mxDy~meNFeOmMU5AP4C5nb6MRaS-QfktZkCS7H4FFWuPy4dXK~XKr67kjWLQ__"
                            title="Title"
                            subtitle="Subtitle"
                            contentSlot="$20"
                            actionSlot={<Button>Add to cart</Button>}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
