import ConsentRequestSession from "./ConsentRequestSession";

/**
 *
 */
export default interface AcceptConsentRequest {
  /**
   * GrantedAudience sets the audience the user authorized the client to use.
   * Should be a subset of `requested_access_token_audience`.
   */
  grantAccessTokenAudience?: string[];

  /**
   * GrantScope sets the scope the user authorized the client to use. Should be
   * a subset of `requested_scope`.
   */
  grantScope?: string[];

  /**
   * Remember, if set to true, tells ORY Hydra to remember this consent
   * authorization and reuse it if the same client asks the same user for the
   * same, or a subset of, scope.
   */
  remember?: boolean;

  /**
   * RememberFor sets how long the consent authorization should be remembered
   * for in seconds. If set to `0`, the authorization will be remembered
   * indefinitely.
   */
  rememberFor?: number;

  /**
   *
   */
  session?: ConsentRequestSession;
}
