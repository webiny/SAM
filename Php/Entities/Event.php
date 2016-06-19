<?php
namespace Apps\Sam\Php\Entities;

use Apps\Core\Php\DevTools\DevToolsTrait;
use Apps\Core\Php\DevTools\Entity\EntityAbstract;

/**
 * Class EmailLog
 *
 * @property string $name
 * @property string $content
 *
 * @package Apps\Core\Php\Entities
 *
 */
class Event extends EntityAbstract
{
    use DevToolsTrait;

    protected static $entityCollection = 'SamEvents';
    protected static $entityMask = '{name}';

    public function __construct()
    {
        parent::__construct();

        $this->attr('name')->char()->setRequired()->setToArrayDefault();
        $this->attr('content')->char()->setRequired()->setToArrayDefault();
    }
}