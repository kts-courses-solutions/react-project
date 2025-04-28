import { Headline } from '@/components/shared/Headline';
import { Content } from './components/Content';

const About = () => {
    return (
        <div>
            <Headline
                title="About"
                subtitle="We show a brief overview in the About section. If you’d like to learn more details about us, feel free to explore further or reach out directly."
            />
            <Content />
        </div>
    );
};

export default About;
