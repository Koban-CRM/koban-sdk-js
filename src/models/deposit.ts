import { IKobanBaseModel, KobanBaseModel } from './baseModel'
import { KobanNullable } from './interfaces'

/**
 *
 *
 * @interface IKobanDeposit
 * @extends {IKobanBaseModel}
 */
interface IKobanDeposit extends IKobanBaseModel {
  Label: KobanNullable<string>
}

/**
 *
 *
 * @class KobanDeposit
 * @extends {KobanBaseModel}
 */
class KobanDeposit extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanDeposit
   */
  public Label?: string

  /**
   * Creates an instance of KobanDeposit.
   * @param {Partial<IKobanDeposit>} [deposit={}]
   * @memberof KobanDeposit
   */
  constructor(deposit: Partial<IKobanDeposit> = {}) {
    super(deposit)
    const { Label } = deposit
    this.Label = Label ? Label : undefined
  }
}

export { IKobanDeposit, KobanDeposit }
