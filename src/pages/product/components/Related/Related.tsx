import { Text } from '@/components/Text';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import s from './Related.module.scss';

const Related = () => {
    return (
        <div className={s.related}>
            <Text tag="h3" className={s.related__title}>
                Related items
            </Text>
            <div className={s.related__cards}>
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
    );
};

export default Related;
