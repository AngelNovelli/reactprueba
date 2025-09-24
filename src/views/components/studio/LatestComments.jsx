import { latestCommentsData } from '../../../assets/data/Data'; 
import Subtitle from '../home/Subtitle';
import CommentItem from './CommentItem';
import Container from '../home/Container';
import NewButton from '../home/Button';

function LatestComments() {
    return (
        <Container className="dashboard-card">
            <Subtitle subtitle="Latest comments" />
            {latestCommentsData.map(comment => (
                <CommentItem
                    key={comment.id}
                    userPhoto={comment.userPhoto}
                    username={comment.username}
                    message={comment.message}
                    videoThumbnail={comment.videoThumbnail}
                />
            ))}
            <NewButton btnclass="btn-dashboard" btntitle="View more"></NewButton>
        </Container>
    );
}

export default LatestComments;