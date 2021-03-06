import { galaxiesService } from "../services/GalaxiesService.js";
import { starsService } from "../services/StarsService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .get("/:id/stars", this.getStars)
      .post("", this.create)
      .delete("/:id", this.remove);
  }
  async getAll(req, res, next) {
    try {
      let galaxies = await galaxiesService.getAll();
      return res.send(galaxies);
    } catch (error) {
      next(error);
    }
  }
  async getStars(req, res, next) {
    try {
      let stars = await starsService.getAll({ galaxyId: req.params.id });
      return res.send(stars);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let galaxy = await galaxiesService.create(req.body);
      return res.send(galaxy);
    } catch (error) {
      next(error);
    }
  }
  async remove(req, res, next) {
    try {
      let message = await galaxiesService.remove(req.params.id);
      return res.send(message);
    } catch (error) {
      next(error);
    }
  }
}
