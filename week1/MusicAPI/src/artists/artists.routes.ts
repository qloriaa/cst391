// import dependencies
import { Request, Response, Router } from "express";
// import { getArtists } from './artists.controller';
import * as ArtistsController from './artists.controller';

const router = Router();
router
    .route('/artists')
    // .get(getArtists);
    .get(ArtistsController.readArtists);

export default router;