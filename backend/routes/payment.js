import express from "express";
import {
  stripeCheckoutSession,
  stripeWebhook,
} from "../controllers/paymentController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router
  .route("/payment/checkout_session")
  .post(isAuthenticatedUser, stripeCheckoutSession);
router.route("/payment/webhook").post(stripeWebhook);

export default router;
