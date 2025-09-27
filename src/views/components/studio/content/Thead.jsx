function Thead(props) {
    return (
        <thead>
            <tr>
                <th>
                    <div class="header-video">
                        <input type="checkbox" class="checkbox" />
                        <span>Video</span>
                    </div>
                </th>
                <th>Visibility</th>
                <th>Restrictions</th>
                <th>Date</th>
                <th>Views</th>
                <th>Comments</th>
                <th>"Like" (%)</th>
                {props.contentType !== 'Playlists' && (
                    <th>Edit</th>
                )}
            </tr>
        </thead>

    );
}

export default Thead;